class Product:
    
    def __init__(self, name, price, ProdList):
        self.name = name
        self.price = price
        self.id = def_ID(self, ProdList)
    
    def QtdProds(ProdList):
        '''retorna q quantidade de produtos cadastrados'''
        return len(ProdList)
        
    def ListProducts(ProdList):
        '''Listar Produtos'''
        for prod in ProdList:
            print("------------------- Produto ", prod.id, "-------------------")
            print("Nome:" ,prod.name)
            print("Valor:" ,prod.price)
    
    def UpdateProduct(ProdList, name, newname, newprice):
        '''Atualizar Produto'''
        for prod in ProdList:
            if prod.name == name:
               prod.name = newname
               prod.price = newprice
        return ProdList
       
                
    def DeleteProduct(ProdList, name):
        '''Excluir Produto'''
        for prod in ProdList:
            if prod.name == name:
                ProdList.remove(prod) # Confirmar se isso ta certo
        return ProdList
                
                
def def_ID(prod, ProdList):  
        '''Definir id do produto''' 
        n = len(ProdList)
        prod.id = n
        ProdList.append(prod)
        return n
        
            
        
        
        
        
        
        