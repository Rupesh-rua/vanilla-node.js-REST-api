let http=require('http');
let products=require('./data/products.json');
let serverName=http.createServer((req,res) => {
	if(req.url==='/api/products' && req.method==='GET'){
		res.writeHead(200, {'Content-Type':'application/json'});
		res.write(JSON.stringify(products));
		res.end();
	} else{
		res.writeHead(404, {'Content-Type':'application/json'});
		res.write(JSON.stringify({message: "Route not found"}));
		res.end();
	}
});

let PORT = process.env.PORT || 5000;

serverName.listen(PORT, () => console.log(`server running on port: ${PORT}`));