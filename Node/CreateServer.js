var http = require("http");
http.createServer(function(req,res)
{
    res.write("Hello Node !! ");
    res.end();
}).listen(8080, function()
{
    console.log("Server is running")
});