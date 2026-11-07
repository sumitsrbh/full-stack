type Task{
    id:ID!,
    title: String!,
    description: String,
    taskStatus:TaskStatus!,
    priority:Priority,
    assignee: User,
    reporter: User,
    comments: [Comment!]!,
    createdAt: DateTime!,
    updatedAt: DateTime!
    project: Project!
}

type Comment{
    id:ID!,
    message: String!,
    author: User!,
    createdAt: DateTime!
}

enum TaskStatus{
    TODO, IN_PROGRESS, IN_REVIEW,DONE
}

enum Priority {
  HIGH, LOW, MEDIUM, URGENT 
}