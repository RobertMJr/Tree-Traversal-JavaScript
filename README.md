# Tree Traversal [![](https://img.shields.io/badge/Robert-Muraru-blue)](https://robert-muraru-portfolio.herokuapp.com/)


## Description
In computer science, tree traversal (also known as tree search and walking the tree) is a form of graph traversal and refers to the process of visiting (checking and/or updating) each node in a tree data structure, exactly once.

### [Binary Search Tree](https://en.wikipedia.org/wiki/Tree_traversal)
Unlike linked lists, one-dimensional arrays and other linear data structures, which are canonically traversed in linear order, trees may be traversed in multiple ways.
They may be traversed in:
* __Depth-First__ order
* __Breadth-First__ order


There are three common ways to traverse them in __Depth-First__ order:
* __In-Order__
    1. Traverse the left subtree by recursively calling the in-order function.
    2. Access the data part of the current node.
    3. Traverse the right subtree by recursively calling the in-order function.
* __Pre-Order__
    1. Access the data part of the current node.
    2. Traverse the left subtree by recursively calling the pre-order function.
    3. Traverse the right subtree by recursively calling the pre-order function.
* __Post-Order__
    1. Traverse the left subtree by recursively calling the post-order function.
    2. Traverse the right subtree by recursively calling the post-order function.
    3. Access the data part of the current node.