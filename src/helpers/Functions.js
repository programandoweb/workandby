function segment(num){
    let pathname,segment;
    if (num==="all") {
      pathname      =   window.location.pathname;
      segment       =   pathname.split('/');
      return segment;
    }
    if (num===undefined) {
      num=1
    }
    pathname      =   window.location.pathname;
    segment       =   pathname.split('/');
    let last          =   (segment.length - num);
    return segment[last];
  }

  const exportar ={segment}
  export default exportar