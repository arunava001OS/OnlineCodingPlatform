const data = {
    "problems" : [
        {
            "id" : 1,
            "slug" : "Fibonacci",
            "statement" : 'Given a number N print the first N fibbonacci numbers.',
            "time_constraint" : 100000, /* in milliseconds */
            "input_description" : 'Several test cases are given.The first line of the sample input contains an integer N.',
            "constraints" : "1<=N<=20",
            "inputs" : [
                "4"
            ],
            "outputs" : [
                "1\n1\n2\n3\n"
            ]
        },
        {
            "id" : 2,
            "slug" : "Even Odd",
            "statement" : 'Given a number N . Find out if it is even or odd.',
            "time_constraint" : 100000, /* in milliseconds */
            "input_description" : 'Any integer N',
            "output_description" : 'For each input return True or False',
            "constraints" : "1<=N<=1000000000",
            "inputs" : [
                "2",
                "3"
            ],
            "outputs" : [
                "True",
                "False"
            ]
        },
        {
            "id" : 3,
            "slug" : "Print upto N",
            "statement" : 'Given a number N print 1 to N.',
            "time_constraint" : 100000, /* in milliseconds */
            "input_description" : 'Any integer N',
            "output_description" : 'For each input print all numbers form 1 to N',
            "constraints" : "1<=N<=1000000000",
            "inputs" : [
                "2"
            ],
            "outputs" : [
                "1\n2",
            ]
        },
    ]
}

export default data;