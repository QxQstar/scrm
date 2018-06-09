export const member_list = [];

(function(){
  const letters = [];
  for(let i = 65;i<91;i++){
    letters.push(String.fromCharCode(i));
  }

//  生成人员列表
  letters.forEach(letter => {
    member_list.push({
      member_name:(letter+'').repeat(2),
      member_id:letter,
      initial_name:letter
    })
  });
})();
