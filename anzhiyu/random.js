var posts=["2024/11/08/ComputerComposition/","2025/09/01/DataAnalysis/","2025/09/07/Algorithms/","2025/01/10/ItemPet/","2025/02/17/lanqiaonote/","2025/03/02/LeetCodeLife/","2024/11/08/JavaStudyRecord/","2024/11/08/JavaTalkLater/","2025/11/24/talk/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };