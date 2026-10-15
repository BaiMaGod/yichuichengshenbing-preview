import {createServer} from 'node:http';
import {readFile} from 'node:fs/promises';
import path from 'node:path';

export async function serveBuild(rootPath='dist'){
 const root=path.resolve(rootPath),mime={'.html':'text/html','.js':'application/javascript','.css':'text/css','.webp':'image/webp','.mp3':'audio/mpeg','.png':'image/png'};
 const server=createServer(async(req,res)=>{
  try{const pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);
   const file=path.resolve(root,'.'+(pathname==='/'?'/index.html':pathname));
   if(!file.startsWith(root+path.sep))throw new Error('outside build');
   const data=await readFile(file);res.writeHead(200,{'Content-Type':mime[path.extname(file)]||'application/octet-stream'});res.end(data);
  }catch{res.writeHead(404);res.end();}
 });
 await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
 return {server,url:`http://127.0.0.1:${server.address().port}`};
}

