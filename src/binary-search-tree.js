const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node{
  constructor(data){
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor (){
    this.mainRoot = null;
  }
  root() {
      return this.mainRoot;
  }

  add(data) {
 
    this.mainRoot = addWithin(this.mainRoot, data);
      function addWithin(node, data){
        if(!node){
          return new Node(data);
        }
        if(node.data === data){
          return node;
        }
        if(data < node.data){
          node.left = addWithin(node.left, data);
        }
        else{
          node.right = addWithin(node.right, data);
        }
        return node;
      }
  }

  has(data) {
    
    function searchInside(node, data){
        if(!node){
          return false;
        }
        if(node.data === data){
          return true;
        }
        if(data < node.data){
          return searchInside(node.left, data);
        }
        else{
          return searchInside(node.right, data);
        }
      }
      return searchInside(this.mainRoot, data);
    }
  

  find(data) {
    
      function searchInside(node, data){
        if(!node){
          return null;
        }
        if(node.data === data){
          return node;
        }
        if(data < node.data){
          return searchInside(node.left, data);
        }
        else{
          return searchInside(node.right, data);
        }
      }
    return searchInside(this.mainRoot, data);
  }

  remove(data) {
    this.mainRoot = removeInside(this.mainRoot, data);
    function removeInside(node, data){
      if(!node){
        return null;
      }
      if (data < node.data){
        node.left = removeInside(node.left, data);
        return node;
      } 
      else if(node.data < data){
        node.right = removeInside(node.right, data);
        return node;
      } else {
        if(!node.left && !node.right){
          return null;
        }
        if(!node.left){
          node = node.right;
          return node;
        }
        if(!node.right){
          node = node.left;
          return node;
        }

        let rightNode = node.right;
        while (rightNode.left){
          rightNode = rightNode.left;
        }
        node.data = rightNode.data;

        node.right = removeInside(node.right, rightNode.data);

        return node;
      }
    }
  }

  min() {
    if (!this.mainRoot) {
      return null;
    }

    let node = this.mainRoot;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.mainRoot) {
      return null;
    }

    let node = this.mainRoot;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};