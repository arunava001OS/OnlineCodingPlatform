const data = {
    "problems" : [
        {
            "id" : 1,
            "slug" : "Double Strings",
            "statement" : 'The palindrome is a string that can be read the same way from left to right and from right to left. For example, strings "aaaaa", "1221", "bbaabb" are palindromes, however the string "chef" is not a palindrome because if we read it from right to left, we will obtain "fehc" that is not the same as "chef".We call a string a "double string" if it has an even length and the first half of this string is equal to the second half of this string, for example "abab" is a double string because the first half "ab" is equal to the second half "ab", however the string "abba" is not a double string because the first half "ab" is not equal to the second half "ba". The empty string "" is a double string, and its length is 0.Chef doesn\'t like palindromes, however he likes "double strings". He often likes to change the order of letters in some palindrome and sometimes to remove some symbols from it. Now he wonders: if a palindrome of length N is given, what is the maximal possible number of characters in a "double string" that can be obtained by removing and changing the order of symbols in it?',
            "time_constraint" : 100000, /* in milliseconds */
            "input_description" : 'Several test cases are given.The first line of the sample input contains an integer T - the number of test cases.Then, T lines follow.Each line consists of a single integer N - the length of a palindrome',
            "output_description" : 'For each test case output a single integer - answer to the problem.',
            "constraints" : "1<=T<=10000 , 1<=N<=1000000000",
            "inputs" : [
                "2\n2\n4"
            ],
            "outputs" : [
                "2\n4"
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