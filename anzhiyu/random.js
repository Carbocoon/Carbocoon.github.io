var posts=["2025/09/07/Algorithms/","2024/11/08/ComputerComposition/","2025/09/01/DataAnalysis/","2024/11/08/JavaStudyRecord/","2025/01/10/ItemPet/","2024/11/08/JavaTalkLater/","2025/02/17/lanqiaonote/","2025/03/02/LeetCodeLife/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };