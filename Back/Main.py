from product import Product 

ProdList = []

Product("agua", 2.00, ProdList)
Product("macarrao", 5.00, ProdList)

Product.ListProducts(ProdList)

print("****************Produtos atualizados*************")

Product.UpdateProduct(ProdList, "macarrao", "massa", 5.00)

Product("batata", 3.00, ProdList)

Product.ListProducts(ProdList)

print("****************Produtos atualizados*************")

Product.DeleteProduct(ProdList, "massa")

Product.ListProducts(ProdList)

