type Project{
    id: ID!,
    tasks: [Task!]!
    startDate:DateTime,
    completionDate: DateTime,
    projectStatus:Status,
    members: [Member!]!,
}
 type Member{
    id:ID!,
    user: User!,
    role:Role!
 }
 type User{
    id:ID!,
    name: String!,
 }
 enum Role{
    ADMIN, MANAGER, DEVELOPER, VIEWER
 }

enum Status{
   COMPLETED, IN_PROGRESS,STALLED,PENDING
}

scalar DateTime