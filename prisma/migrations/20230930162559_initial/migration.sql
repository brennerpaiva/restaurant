-- CreateTable
CREATE TABLE "Products" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "size" TEXT,
    "coverImage" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "imagesUrl" TEXT[],
    "price" DECIMAL(8,2) NOT NULL,
    "promotionalPrice" DECIMAL(8,2),
    "avaliable" BOOLEAN NOT NULL,
    "recommended" BOOLEAN NOT NULL DEFAULT false,
    "releaseDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("id")
);
