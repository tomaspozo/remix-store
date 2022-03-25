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
      ratingCount: 1,
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
      ratingCount: 12,
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
      ratingCount: 1,
      description:
        "With a sleek design and a captivating essence, this is a modern Classic made for every occasion.",
    },
  ];
}
