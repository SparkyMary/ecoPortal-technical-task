```
An organization contains many employees, which are broken up into various subteams, which may be broken up further.

var Organisation = {
    _id: ObjectId(1001),
    name: 'American Poets and Writers',
}

var Subteam = {
    _id: ObjectId(5001),
    name: 'Subteam 1',
    organisationId: ObjectId(1001),
    subteamParentIds: [ObjectId(5002), ObjectId(5003)]
}


An employee can be a member of more than one subteam or organization.

var Employee = {
    _id: ObjectId(10000001),
    name: { first: 'Chuck', last: 'Palahniuk },
    organisationIds: [ObjectId(1002), ObjectId(1003)]
    subteamIds: [ObjectId(5001), ObjectId(5002)],
}


A page with content contains one or more sections, each section can contain one or more fields (number, text, date).
Content may be permissioned against certain subteams or directly against certain employees.

var Page = {
    _id: ObjectId(10),
    sections: [
        section_id: 's1',
        permission: [
            {
                principal: {
                type: "subteam",
                id: ObjectId(5001)
                },
                actions: ["read", "write", "delete"]
            },
            {
                principal: {
                type: "employee",
                id: ObjectId(10000001)
                },
                actions: ["read", "write"]
            }
        ],
        fileds: [
            {
                field_id: 'f1',
                type: 'number',
                value: 5,
            },
            {
                field_id: 'f2',
                type: 'text',
                value: 'Lalala',
            },
            {
                field_id: 'f3',
                type: 'date',
                value: new Date('Jun 23, 2012'),
            }
        ]
    ]
}
```
