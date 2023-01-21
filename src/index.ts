function buttonClick(): any {
   function genNumber(): number {
      return Math.floor(1000 + Math.random() * 599500);
   }

   const hentai = "https://3hentai.net/d";
   const link = `${hentai}/${genNumber}`;
   const doc: HTMLElement = document.getElementById("hentai");
   doc.innerHTML = `<a href=${link} style="color: white">Il a un petit secret</a>`;
}
