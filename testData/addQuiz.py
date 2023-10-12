import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
import random
import math
# Initialize Firebase Admin SDK (You need to have your service account credentials JSON)
cred = credentials.Certificate("F:\Projects\m-tutor\m-tutor\\testData\serviceAccountKey.json")
firebase_admin.initialize_app(cred)

# Initialize Firestore
db = firestore.client()

qs = [
    {
        "title": "Geometry",
        "dropdownItems": ["Algebra", "Trigonometry", "Circle", "Ellipse"],
    },
    {
      "title": "Algebra",
      "dropdownItems": [
        "Linear Equations",
        "Quadratic Equations",
        "Polynomials",
        "Inequalities",
      ],
    },
    {
      "title": "Trigonometry",
      "dropdownItems": [
        "Trigonometric Functions",
        "Trigonometric Identities",
        "Solving Triangles",
      ],
    },
    {
      "title": "Calculus",
      "dropdownItems": [
        "Limits and Continuity",
        "Derivatives",
        "Integrals",
        "Applications of Calculus",
      ],
    },
    {
      "title": "Statistics",
      "dropdownItems": [
        "Probability",
        "Descriptive Statistics",
        "Inferential Statistics",
        "Regression Analysis",
      ],
    },

  ]


def genq(category):
    if category == "Geometry":
        # Generate a geometry question
        shape = random.choice(["square", "triangle", "rectangle", "circle", "ellipse"])
        
        if shape == "square":
            side_length = random.randint(1, 20)
            question = f"What is the area of a square with a side length of {side_length} units?"
            answer = side_length ** 2
        elif shape == "triangle":
            base = random.randint(1, 20)
            height = random.randint(1, 20)
            question = f"If a triangle has a base of {base} units and a height of {height} units, what is its area?"
            answer = (base * height) // 2
        elif shape == "rectangle":
            length = random.randint(1, 20)
            width = random.randint(1, 20)
            question = f"If a rectangle has a length of {length} units and a width of {width} units, what is its area?"
            answer = length * width
        elif shape == "circle":
            radius = random.randint(1, 10)
            question = f"What is the circumference of a circle with a radius of {radius} units (rounded to the nearest integer)?"
            answer = round(2 * 3.14159265359 * radius)
        else:  # Ellipse
            major_axis = random.randint(1, 15)
            minor_axis = random.randint(1, 10)
            question = f"What is the area of an ellipse with a major axis of {major_axis} units and a minor axis of {minor_axis} units (rounded to the nearest integer)?"
            answer = round(3.14159265359 * major_axis * minor_axis)
    elif category == "Algebra":
        # Generate an algebra question
        a = random.randint(1, 10)
        b = random.randint(1, 10)
        operator = random.choice(["+", "-", "*", "/"])
        
        if operator == "+":
            question = f"What is {a} + {b}?"
            answer = a + b
        elif operator == "-":
            question = f"What is {a} - {b}?"
            answer = a - b
        elif operator == "*":
            question = f"What is {a} * {b}?"
            answer = a * b
        else:
            if b == 0:
                b = 1
            question = f"What is {a} / {b} (rounded to the nearest integer)?"
            answer = round(a / b)
    elif category == "Trigonometry":
        # Generate a trigonometry question
        angle_degrees = random.randint(1, 90)
        question = f"What is the sine of {angle_degrees} degrees (rounded to two decimal places)?"
        answer = round(math.sin(math.radians(angle_degrees)), 2)
    # elif category == "Calculus":
    #     # Generate a calculus question
    #     function = random.choice(["f(x) = x^2", "f(x) = 2x + 3", "f(x) = sin(x)", "f(x) = cos(x)"])
    #     question = f"Find the derivative of {function} with respect to x."
        
    #     if "x^2" in function:
    #         answer = "f'(x) = 2x"
    #     elif "2x + 3" in function:
    #         answer = "f'(x) = 2"
    #     elif "sin(x)" in function:
    #         answer = "f'(x) = cos(x)"
    #     else:  # "cos(x)" in function
    #         answer = "f'(x) = -sin(x)"
    else:  # Statistics
        # Generate a statistics question
        num_data_points = random.randint(5, 20)
        data = [random.randint(1, 100) for _ in range(num_data_points)]
        question = f"Calculate the mean (average) of the following data: {', '.join(map(str, data))}."
        answer = round(sum(data) / num_data_points, 2)
    
    # Generate options
    options = [{ "type": "text", "content": str(answer) }]
    
    print(answer)
    while len(options) < 4:
        random_option = str(random.randint(round(max(0,answer-10)), round(answer + 10)))
        if random_option != str(answer) and random_option not in options:
            options.append({ "type": "text", "content": str(random_option) })
    
    random.shuffle(options)
    
    return {
        "question": question,
        "options": options,
        "answer": options.index({ "type": "text", "content": str(answer) }),
        "assignedmarks": random.randint(3, 5),
    }

new_document_ref = db.collection("Quiz")
for q in qs:
    title = q["title"]
    print(title)
    for subtitle in q["dropdownItems"]:
        print(subtitle)
        questions = []

        for i in range(random.randint(10,15)):
            questions.append(genq(title))

        newData = {
            "title": title,
            "subtitle": subtitle,
            "questions": questions,
        }

        new_document_ref.add(newData)


# # Create a new document with a different ID


# # Set the data of the new document with the data from the source document
# 
