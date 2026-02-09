import "dotenv/config";
import { prisma } from "../src/db/prisma";

async function main() {
  // 2 branches
  const colombo = await prisma.branch.create({
    data: { name: "Colombo Branch", address: "Colombo, Sri Lanka", lat: 6.9271, lng: 79.8612 },
  });

  const kandy = await prisma.branch.create({
    data: { name: "Kandy Branch", address: "Kandy, Sri Lanka", lat: 7.2906, lng: 80.6337 },
  });

  // 2 POS terminals each
  await prisma.posTerminal.createMany({
    data: [
      { branchId: colombo.id, name: "Colombo POS 1", deviceCode: "COL-POS-1" },
      { branchId: colombo.id, name: "Colombo POS 2", deviceCode: "COL-POS-2" },
      { branchId: kandy.id, name: "Kandy POS 1", deviceCode: "KAN-POS-1" },
      { branchId: kandy.id, name: "Kandy POS 2", deviceCode: "KAN-POS-2" },
    ],
  });

  // products (price in cents)
  const rice = await prisma.product.create({
    data: { sku: "SKU-RICE-005", name: "Nipuna Rice 5kg", price: 450000 },
  });
  const milk = await prisma.product.create({
    data: { sku: "SKU-MILK-001", name: "Anchor Milk Powder 1kg", price: 220000 },
  });
  const soap = await prisma.product.create({
    data: { sku: "SKU-SOAP-001", name: "Sunlight Soap", price: 25000 },
  });

  // inventory per branch
  await prisma.inventory.createMany({
    data: [
      { branchId: colombo.id, productId: rice.id, qty: 30 },
      { branchId: colombo.id, productId: milk.id, qty: 18 },
      { branchId: colombo.id, productId: soap.id, qty: 50 },

      { branchId: kandy.id, productId: rice.id, qty: 10 },
      { branchId: kandy.id, productId: milk.id, qty: 6 },
      { branchId: kandy.id, productId: soap.id, qty: 25 },
    ],
  });

  console.log("✅ Seed done: branches, terminals, products, inventory");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
