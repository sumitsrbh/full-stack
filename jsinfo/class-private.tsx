class Admin{
    #admin =true
    static isAdmin(value: unknown): value is Admin{
        return #admin in value
    }
}

const admin =new Admin

const fakeAdmin={
    admin:true
}

const result1= Admin.isAdmin(admin)
const result2= Admin.isAdmin(fakeAdmin)
console.log("result1", result1, "=====", "result2", result2)