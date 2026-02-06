const express = require('express');
const http = require('http');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
const { Server } = require('socket.io');

const prisma = new PrismaClient();
const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);

const io = new Server(server, {
  cors: { origin: "*" }
});

// Listen for clients
io.on("connection", (socket) => {
  console.log("Socket connected:", socket.id);
});

// POS Sell Endpoint
app.post("/api/pos/sell", async (req, res) => {
  try {
    const { branchId, productId, qty } = req.body;

    const inv = await prisma.inventory.findFirst({
      where: { branchId, productId }
    });

    if (!inv || inv.stock < qty)
      return res.status(400).json({ message: "Out of stock" });

    const newStock = inv.stock - qty;

    await prisma.inventory.update({
      where: { id: inv.id },
      data: { stock: newStock }
    });

    // Emit real-time stock update to Next.js
    io.emit("stock_update", {
      productId,
      branchId,
      stock: newStock
    });

    return res.json({ success: true });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
});

server.listen(process.env.PORT || 4000, () =>
  console.log("Backend running on port 4000")
);
