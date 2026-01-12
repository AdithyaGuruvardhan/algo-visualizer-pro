export const ALGORITHMS = {
    Sorting: [
        {
            name: "Bubble Sort",
            slug: "bubble-sort",
            description: "Repeatedly swaps adjacent elements if they are in the wrong order",
        },
        {
            name: "Selection Sort",
            slug: "selection-sort",
            description: "Selects the minimum element and places it at the correct position",
        },
        {
            name: "Insertion Sort",
            slug: "insertion-sort",
            description: "Builds the sorted array one element at a time by insertion",
        },
        {
            name: "Merge Sort",
            slug: "merge-sort",
            description: "Divide-and-conquer algorithm that recursively merges sorted halves",
        },
        {
            name: "Quick Sort",
            slug: "quick-sort",
            description: "Partitions the array around a pivot and sorts subarrays recursively",
        },
        {
            name: "Heap Sort",
            slug: "heap-sort",
            description: "Uses a heap data structure to repeatedly extract the maximum element",
        },
    ],

    Searching: [
        {
            name: "Linear Search",
            slug: "linear-search",
            description: "Sequentially checks each element until the target is found",
        },
        {
            name: "Binary Search",
            slug: "binary-search",
            description: "Searches a sorted array by repeatedly dividing the search interval",
        },
        {
            name: "Interpolation Search",
            slug: "interpolation-search",
            description: "Estimates the position of the target based on value distribution",
        },
        {
            name: "Ternary Search",
            slug: "ternary-search",
            description: "Divides the array into three parts to locate the target element",
        },
    ],

    Graphs: [
        {
            name: "Breadth First Search (BFS)",
            slug: "bfs",
            description: "Traverses the graph level by level using a queue",
        },
        {
            name: "Depth First Search (DFS)",
            slug: "dfs",
            description: "Explores as far as possible along each branch before backtracking",
        },
        {
            name: "Dijkstra's Algorithm",
            slug: "dijkstra",
            description: "Finds the shortest path from a source to all vertices with non-negative weights",
        },
        {
            name: "Bellman-Ford Algorithm",
            slug: "bellman-ford",
            description: "Computes shortest paths and can handle negative edge weights",
        },
        {
            name: "Topological Sort",
            slug: "topological-sort",
            description: "Linear ordering of vertices in a Directed Acyclic Graph (DAG)",
        },
    ],

    "Dynamic Programming": [
        {
            name: "0/1 Knapsack",
            slug: "knapsack",
            description: "Maximizes total value within a weight limit using optimal substructure",
        },
        {
            name: "Longest Increasing Subsequence (LIS)",
            slug: "lis",
            description: "Finds the longest subsequence with strictly increasing elements",
        },
        {
            name: "Coin Change",
            slug: "coin-change",
            description: "Determines the minimum number of coins needed for a target amount",
        },
        {
            name: "Matrix Chain Multiplication",
            slug: "matrix-chain-multiplication",
            description: "Minimizes the cost of multiplying a sequence of matrices",
        },
    ],
};
