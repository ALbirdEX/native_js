test("should take old men older then 90", () => {

    const ages = [18, 20, 22, 1, 100, 90, 14]

    const allAge = ages.filter(ages =>  ages > 90)

    expect(allAge.length).toBe(1);
    expect(allAge[0]).toBe(100);
})

test("should take courses chipper 160", () => {

    const courses = [
        {title: "CSS", price: 110},
        {title: "JS", price: 200},
        {title: "REACT", price: 150},
    ]

    const cheapCourses = courses.filter(course => course.price < 160)

    expect(cheapCourses.length).toBe(2);
    expect(cheapCourses[0].title).toBe("CSS");
    expect(cheapCourses[1].title).toBe("REACT");
})

test("get only uncompleted tasks", () => {

    const tasks = [
        {id: 1, title: "Bread", isDone: true},
        {id: 2, title: "Milk", isDone: true},
        {id: 3, title: "Ber", isDone: true},
        {id: 4, title: "Fish", isDone: false},
    ]

    const completedTasks = tasks.filter(task => !task.isDone)

    expect(completedTasks.length).toBe(1);
    expect(completedTasks[0].title).toBe("Fish");
    expect(completedTasks[0].id).toBe(4);
})

test("get only ncompleted tasks", () => {

    const tasks = [
        {id: 1, title: "Bread", isDone: true},
        {id: 2, title: "Milk", isDone: true},
        {id: 3, title: "Ber", isDone: true},
        {id: 4, title: "fish", isDone: false},
    ]

    const completedTasks = tasks.filter(task => task.isDone)
  /*  const completedTasks = tasks.filter(function (task) {
        return task.isDone
    })*/

    expect(completedTasks.length).toBe(3);
    expect(completedTasks[1].title).toBe("Milk");
    expect(completedTasks[2].id).toBe(3);
})