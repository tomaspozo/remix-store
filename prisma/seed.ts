import { Prisma, PrismaClient } from "@prisma/client";
const db = new PrismaClient();

async function seed() {
  const products = getProducts();

  await db.product.createMany({ data: products });
}

seed();

function getProducts(): Prisma.ProductCreateInput[] {
  return [
    {
      name: "Bamboo Tan",
      currency: "USD",
      price: 199,
      flag: "new",
      imageUrl:
        "https://images.unsplash.com/photo-1602024242516-fbc9d4fda4b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      rating: 4,
      ratingCount: 12,
      description:
        "With a sleek design and a captivating essence, this is a modern Classic made for every occasion.",
    },
    {
      name: "Iconic Turquoise",
      currency: "USD",
      price: 199,
      salePrice: 179.99,
      flag: "on-sale",
      imageUrl:
        "https://images.unsplash.com/photo-1509941943102-10c232535736?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      rating: 4,
      ratingCount: 12,
      description:
        "With a sleek design and a captivating essence, this is a modern Classic made for every occasion.",
    },
    {
      name: "Marble Leather",
      currency: "USD",
      price: 199,
      imageUrl:
        "https://images.unsplash.com/photo-1564594985645-4427056e22e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      rating: 4,
      ratingCount: 110,
      description:
        "With a sleek design and a captivating essence, this is a modern Classic made for every occasion.",
    },
    {
      name: "Silve wolf",
      currency: "GBP",
      price: 199,
      imageUrl:
        "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=680&q=80",
      rating: 5,
      ratingCount: 161,
      description:
        "With a sleek design and a captivating essence, this is a modern Classic made for every occasion.",
    },
    {
      name: "Luxury Pink",
      currency: "USD",
      price: 399,
      flag: "new",
      imageUrl:
        "https://image.made-in-china.com/202f0j00KopUVrkqstcG/Luxury-Rose-Gold-Women-Watch-Magnet-Starry-Sky-Wrist-Watch-for-Ladies-Female-Wristwatch.webp",
      rating: 5,
      ratingCount: 45,
      description:
        "With a sleek design and a captivating essence, this is a modern Classic made for every occasion.",
    },
    {
      name: "Black Leather",
      currency: "USD",
      price: 599,
      flag: "new",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0579/4080/3782/products/1574084644869_1553839196707_611VKtzrdSL._UL1100__1_-originnm80prcnt.jpg",
      rating: 5,
      ratingCount: 97,
      description:
        "With a sleek design and a captivating essence, this is a modern Classic made for every occasion.",
    },
  ];
}
