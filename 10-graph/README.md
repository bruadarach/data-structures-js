# Graph

- A graph is **a non-linear data structure** that consists of a finite number of vertices (also called nodes) connected by edges.
- Trees are a specific type of graph data structure.

# Types of Graph

- **Directed Graph**

  - A graph in which the edges have a direction.
  - Edges are usually represented by arrows pointing in the direction. the graph can be traversed.
  - It can NOT traverse through `C → B → A`

- **Undirected Graph**
  - A graph in which the edges are bidirectional.
  - The graph can be traversed in either direction.
  - The absence of an arrow tells us that the graph is undirected.
  - It can traverse through `C → B → A`

# More graph types

- Only vertices
- Multiple edges from one node
- Cycles in the graph
- Self-loops on a node
- Disconnected
- A graph contain weights on edges representing the cost of traversing that edge

# Graph Usage

- **Google maps**
  - Where cities are represented as vertices, and roads as edges to help build a navigation system.
- **Social Media Sites**
  - Users are considered as vertices, and edges are the links between connections. (to show mutual connections, post suggestions, and other recommendations)

# Graph Representation

- **Adjacency matrix**

  - An adjacency matrix is **a 2D-array of size `V x V`** where V is the number of vertices in the graph.
  - Each row and column represent a vertex.
  - If the value of any element say, **matrix[i][j] is 1, it represents that there is an edge connecting vertex i and vertex j.**

- **Adjacency List**
  - Vertices are stored in **a map-like data structure**, and **every vertex stores a list of its adjacent vertices.**

# `Adjacency Matrix` vs. `Adjacency List`

- **Store-siwe, an adjacency list is way more efficient**
  - With an **adjacency list**, we only need to store the values for the edges that exists.
  - With an **adjacency matrix**, we store values irrespective of whether an edge exists or not.
- **Time complexity**
  - With an **adjacency list**, inserting/finding adjacent nodes is **constant time complexity**
  - with **adjacency matrix**, inserting/finding adjacent nodes is **linear time complexity**
- How to **store additional values** (like a weight of an edge)
  - An **adjacency list** allows you to store additional values with an edge such as weight of the edge.
  - An **adjacency matrix** would have to store such information externally.
