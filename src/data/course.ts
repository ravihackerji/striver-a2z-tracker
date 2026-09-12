import type { Problem, Step } from "../types";
export const steps: Step[] = [
{id:1,title:"Learn the Basics",problemCount:54,prerequisites:[],importance:"Critical",keySubtopics:["Language basics","Basic maths","Recursion","Hashing"]},
{id:2,title:"Sorting Techniques",problemCount:7,prerequisites:["Step 1"],importance:"Medium",keySubtopics:["Selection","Bubble","Insertion","Merge","Quick sort"]},
{id:3,title:"Arrays",problemCount:40,prerequisites:["Step 1–2"],importance:"Critical",keySubtopics:["Traversal","Kadane","Prefix sum","2D arrays"]},
{id:4,title:"Binary Search",problemCount:32,prerequisites:["Arrays"],importance:"Critical",keySubtopics:["1D search","Binary search on answer","2D matrix"]},
{id:5,title:"Strings",problemCount:15,prerequisites:["Arrays"],importance:"High",keySubtopics:["String manipulation","Pattern problems"]},
{id:6,title:"Linked List",problemCount:31,prerequisites:["Step 1"],importance:"Critical",keySubtopics:["Singly/doubly LL","Reversal","Cycle detection","LRU"]},
{id:7,title:"Recursion",problemCount:25,prerequisites:["Basics"],importance:"Critical",keySubtopics:["Subsequences","Backtracking"]},
{id:8,title:"Bit Manipulation",problemCount:18,prerequisites:["Basics"],importance:"Medium",keySubtopics:["Bit tricks","XOR","Bitmask subsets"]},
{id:9,title:"Stack & Queues",problemCount:30,prerequisites:["Arrays","Recursion"],importance:"Critical",keySubtopics:["Implementation","Expression conversion","Monotonic stack"]},
{id:10,title:"Sliding Window & Two Pointer",problemCount:12,prerequisites:["Arrays"],importance:"Critical",keySubtopics:["Fixed window","Variable window","Two pointers"]},
{id:11,title:"Heaps",problemCount:17,prerequisites:["Recursion"],importance:"High",keySubtopics:["Heap implementation","Priority queue"]},
{id:12,title:"Greedy",problemCount:15,prerequisites:["Sorting"],importance:"High",keySubtopics:["Interval scheduling","Greedy proofs"]},
{id:13,title:"Binary Trees",problemCount:38,prerequisites:["Recursion","Stack"],importance:"Critical",keySubtopics:["Traversals","Views","LCA","Diameter","Construction"]},
{id:14,title:"Binary Search Trees",problemCount:16,prerequisites:["Binary Trees"],importance:"High",keySubtopics:["BST properties","Insert/delete","Validate"]},
{id:15,title:"Graphs",problemCount:53,prerequisites:["Recursion","Queue"],importance:"Critical",keySubtopics:["BFS/DFS","Topo sort","Shortest path","MST","DSU","SCC"]},
{id:16,title:"Dynamic Programming",problemCount:55,prerequisites:["Recursion"],importance:"Critical",keySubtopics:["1D/2D","Grid","Knapsack","LCS","LIS","MCM","Stocks"]},
{id:17,title:"Tries",problemCount:7,prerequisites:["Recursion"],importance:"Medium",keySubtopics:["Insert","Search","Prefix"]},
{id:18,title:"Strings — Advanced",problemCount:9,prerequisites:["Tries","Recursion"],importance:"Medium",keySubtopics:["Pattern matching","Advanced string algorithms"]}
];
// Representative seed only. Paste the complete official problem list into this array.
// TODO: paste full problem list here
export const problems: Problem[] = [
{id:"s1-p1",title:"Learn the basics: input/output and variables",difficulty:"Easy",articleUrl:"https://takeuforward.org/",videoUrl:"https://www.youtube.com/@takeUforward",practiceUrl:"https://www.geeksforgeeks.org/",tags:["Basics"],stepId:1,topic:"Language basics"},
{id:"s1-p2",title:"Count digits in a number",difficulty:"Easy",articleUrl:"https://takeuforward.org/",videoUrl:"https://www.youtube.com/@takeUforward",practiceUrl:"https://www.geeksforgeeks.org/",tags:["Maths","Basics"],stepId:1,topic:"Basic maths"},
{id:"s1-p3",title:"Reverse a number",difficulty:"Easy",articleUrl:"https://takeuforward.org/",videoUrl:"https://www.youtube.com/@takeUforward",practiceUrl:"https://www.geeksforgeeks.org/",tags:["Maths","Basics"],stepId:1,topic:"Basic maths"},
{id:"s2-p1",title:"Selection Sort",difficulty:"Easy",articleUrl:"https://takeuforward.org/",videoUrl:"https://www.youtube.com/@takeUforward",practiceUrl:"https://www.geeksforgeeks.org/",tags:["Sorting"],stepId:2,topic:"Sorting"},
{id:"s3-p1",title:"Two Sum",difficulty:"Easy",articleUrl:"https://takeuforward.org/",videoUrl:"https://www.youtube.com/@takeUforward",practiceUrl:"https://leetcode.com/problems/two-sum/",tags:["Array","Hashing"],stepId:3,topic:"Arrays"},
{id:"s3-p2",title:"Maximum Subarray (Kadane's Algorithm)",difficulty:"Medium",articleUrl:"https://takeuforward.org/",videoUrl:"https://www.youtube.com/@takeUforward",practiceUrl:"https://leetcode.com/problems/maximum-subarray/",tags:["Array","Kadane"],stepId:3,topic:"Arrays"},
{id:"s4-p1",title:"Binary Search",difficulty:"Easy",articleUrl:"https://takeuforward.org/",videoUrl:"https://www.youtube.com/@takeUforward",practiceUrl:"https://leetcode.com/problems/binary-search/",tags:["Binary Search"],stepId:4,topic:"1D search"},
{id:"s6-p1",title:"Reverse Linked List",difficulty:"Easy",articleUrl:"https://takeuforward.org/",videoUrl:"https://www.youtube.com/@takeUforward",practiceUrl:"https://leetcode.com/problems/reverse-linked-list/",tags:["Linked List"],stepId:6,topic:"Singly linked list"},
{id:"s9-p1",title:"Valid Parentheses",difficulty:"Easy",articleUrl:"https://takeuforward.org/",videoUrl:"https://www.youtube.com/@takeUforward",practiceUrl:"https://leetcode.com/problems/valid-parentheses/",tags:["Stack"],stepId:9,topic:"Stack"},
{id:"s15-p1",title:"Number of Islands",difficulty:"Medium",articleUrl:"https://takeuforward.org/",videoUrl:"https://www.youtube.com/@takeUforward",practiceUrl:"https://leetcode.com/problems/number-of-islands/",tags:["Graph","BFS","DFS"],stepId:15,topic:"BFS/DFS"},
{id:"s16-p1",title:"Climbing Stairs",difficulty:"Easy",articleUrl:"https://takeuforward.org/",videoUrl:"https://www.youtube.com/@takeUforward",practiceUrl:"https://leetcode.com/problems/climbing-stairs/",tags:["DP"],stepId:16,topic:"1D DP"}
];