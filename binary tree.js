
            //定义每个节点的模型，每个节点都分中心节点，左右节点三个节点，节点也可能成为树 设计一个树
            function arrayAct(){
                      this.value = null;
                      this.left = null;
                      this.right = null;
                  }
            /*
            *拿数组的第一个数据作为根节点，下面的每个节点都是一个新的对象，分别以不同的中心节点
            *判断左右节点的归属，最后形成一个二叉树
            */
          arrayAct.prototype.add = function(data){
              if (!data) {
                  return;
              };
           if (this.value == null) {
                  this.value = data;
                  return;
              };
            //定义最中心的中心节点
               var code = new arrayAct();
              code.value = data;
              if (this.value >= data) {
                  if (this.left == null) {
                      this.left = code;
                  }else{
                      this.left.add(data);
                  }
              }else{
                  if (this.right == null) {
                      this.right = code;
                  }else{
                      this.right.add(data);
                  }
              }
          }  
           //使用深度优先遍历递归采用栈的方式存储，所以会循环调用
          arrayAct.prototype.print = function(data){       

              if (this.left) {
                  console.log(this)
                  this.left.print(data);
              };
              data.push(this.value);
              if (this.right) {
                  console.log(this)
                  this.right.print(data);
              };
          }
              function app(){
                      var array = [2,6,56,102,5,4,47,7000,200,45,24,85,63,954,6222,5],
                      re = [];
                      sortArray = new arrayAct();
                      for (var i = 0; i < array.length; i++) {
                          sortArray.add(array[i]);
                      };
                      console.log(sortArray)
                      sortArray.print(re);
                      console.log(re)
            }
          app();  
          /*给出树 要求遍历树*/
          var tree = {
               value: 1,
               left: {
                value: 2,
                left: {
                 value: 4
                }
               },
               right: {
                value: 3,
                left: {
                 value: 5,
                 left: {
                  value: 7
                 },
                 right: {
                  value: 8
                 }
                },
                right: {
                 value: 6
                }
               }
              }
          /*递归排序*/

          //先序遍历
          var preOrder=function(node){
            if(node){
              console.log(value);
              preOrder(node.left);
              preOrder(node.right);
            }
          };
          // 中序遍历
          var inOrder=function(node){
            if(node){
              inOrder(node.left);
              console.log(node);
              inOrder(node.right);
            }
          };
          // 后序遍历
          var postOrder=function(node){
            if(node){
              postOrder(node.left);
              postOrder(node.right);
              console.log(node);
            }
          };
          /*非递归*/
          // 层序遍历
          var preOrderUnRecur = function(node) { 
               if(!node) {  
                throw new Error('Empty Tree')
               } 
               var stack = []
               stack.push(node) 
               while(stack.length !== 0) {
                node = stack.pop()  //移除数组中最后一个元素
                console.log(node.value)  
                if(node.right) 
                  stack.push(node.right)  
                if(node.left) 
                  stack.push(node.left)
               }
              }
          // 中序遍历
          var inOrderUnRecur = function(node) { 
           if(!node) {  
            throw new Error('Empty Tree')
           } 
           var stack = [] 
           while(stack.length !== 0 || node) {  
            if(node) {
             stack.push(node)
             node = node.left
            } else {
             node = stack.pop()   
             console.log(node.value)
             node = node.right
            }
           }
          }
          // 后序遍历
          var posOrderUnRecur = function(node) { 
             if(node) {  
              var s1 = []  
              var s2 = []
              s1.push(node)  
              while(s1.length !== 0) {
               node = s1.pop()
               s2.push(node)   
               if(node.left) {
                s1.push(node.left)
               }     
               if(node.right) {
                s1.push(node.right)
               }
              }  
              while(s2.length !== 0) {   
               console.log(s2.pop().value);
              }
             }
            }

   