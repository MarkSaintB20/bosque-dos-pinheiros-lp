# Diagnóstico da entrega ao cliente

A captura confirma que o clone do projeto ainda referencia a arte principal por um caminho `/manus-storage/...`. Esse caminho funciona no ambiente Manus, mas não existe em um servidor externo comum, e por isso a imagem principal falha após o envio ao cliente.

A correção será uma distribuição estática autônoma. O pacote final incluirá a arte principal, favicon e OG Image como arquivos locais, e o bundle compilado apontará exclusivamente para essas rotas relativas.
