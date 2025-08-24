export default function Home() {
  return (
    <main style={{minHeight:'100vh',background:'#000',color:'#fff',display:'grid',placeItems:'center',fontFamily:'system-ui'}}>
      <div style={{textAlign:'center'}}>
        <h1 style={{letterSpacing:'0.12em'}}>ELEV<span style={{color:'#39ffd5'}}>IQUE</span></h1>
        <p>Next.js deployed on Vercel ✔</p>
        <a href="/portfolio" style={{color:'#39ffd5'}}>Go to Portfolio</a>
      </div>
    </main>
  );
}
