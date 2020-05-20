db.books.insert(
    {Name:"Human Universe",
    Author:["Brian Cox", "Andrew Cohen"],
    Binding:["Hardback","Paperback","e-book"],
    publisher:"William Collins",
    PublishedIn:2015,
    NoOfCopies:{Paperback:16,Hardback:10},
    Cost:{"Paperback":400,"Hardback":1400,"e-book":300},
    Description:"This book asks questions about our origins, our destiny and our place in the universe",
    Classified:["earth sciences", "astrophysics", "science", "evolution"]
}
)

db.books.insert(
    {Name:"The Origin of Species",
    Author:"Charles Darwin",
    Binding:["Hardback"],

    ISBN:{Hardback:10},
    Cost:{Hardback:800},
    Classified:["biology", "life sciences", "evolution", "science"]
}
)
