export const handleScroll=async(setPage)=>{
    try{
        if(window.innerHeight+document.documentElement.scrollTop+1>document.documentElement.scrollHeight){
            setPage(prev=>prev+1);
        }
    }catch(e){
        console.log(e);
    }
  }