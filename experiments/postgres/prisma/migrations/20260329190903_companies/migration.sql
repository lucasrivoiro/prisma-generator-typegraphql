-- AlterTable
ALTER TABLE "_CreatorToProblem" ADD CONSTRAINT "_CreatorToProblem_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_CreatorToProblem_AB_unique";

-- CreateTable
CREATE TABLE "companies" (
    "id" UUID NOT NULL,
    "parent_id" UUID,
    "name" VARCHAR(100) NOT NULL,
    "description" TEXT,
    "founding_date" DATE NOT NULL,
    "slug" VARCHAR(100) NOT NULL,
    "logo" VARCHAR(255),
    "featured" BOOLEAN NOT NULL DEFAULT false,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "companies_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "companies_slug_key" ON "companies"("slug");

-- AddForeignKey
ALTER TABLE "companies" ADD CONSTRAINT "companies_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "companies"("id") ON DELETE SET NULL ON UPDATE CASCADE;
