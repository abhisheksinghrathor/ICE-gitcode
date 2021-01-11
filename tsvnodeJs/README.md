Steps to Run the test

1: Download & install node on your system (if you already have node installed on your system skip this step )

Software Download link: https://nodejs.org/en/download/

Steps to install: https://phoenixnap.com/kb/install-node-js-npm-on-windows

2: Go to github link to download the code

Github Link: https://github.com/abhisheksinghrathor/ICE-gitcode

3: open command prompt on your desktop and go to the path where you have downloaded the code

open the folder and go to the tsvnodeJs folder

So go to this path in command promt

4: run node command “npm install” to install the package require

5: Now when all the packages are install run “npm start” to run code on server

Now the code ill run on web server

“ http://localhost:3005/ “

GET: http://localhost:3005/submitData
POST: http://localhost:3005/submitData

About the Code :

GET REQUEST

Example
type: GET
Url: http://localhost:3005/submitData
Input: none
Output: 
{
    "Claire Gute": {
        "orders": [
            {
                "order_id": "CA-2016-152156",
                "order_date": "2016-11-08T00:00:00.000Z",
                "line_items": [
                    {
                        "product_url": "https://www.foo.com/Furniture/Bookcases/FUR-BO-10001798",
                        "revenue": 261.96
                    },
                    {
                        "product_url": "https://www.foo.com/Furniture/Chairs/FUR-CH-10000454",
                        "revenue": 731.94
                    }
                ]
            }
        ]
    }
}

POST REQUEST

Example
type: POST
Url: http://localhost:3005/submitData
Input: TSV data

Row ID	Order ID	Order Date	Ship Date	Ship Mode	Customer ID	Customer Name	Segment	Country	City	State	Postal Code	Region	Product ID	Category	Sub-Category	Product Name	Sales	Quantity	Discount	Profit
1	CA-2016-152156	11/8/16	11/11/16	Second Class	CG-12520	Claire Gute	Consumer	United States	Henderson	Kentucky	42420	South	FUR-BO-10001798	Furniture	Bookcases	"Bush, Somerset Collection Bookcase?"	261.96	2	0	41.9136
2	CA-2016-152156	11/8/16	11/11/16	Second Class	CG-12520	Claire Gute	Consumer	United States	Henderson	Kentucky	42420	South	FUR-CH-10000454	Furniture	Chairs	Hon Deluxe Fabric Upholstered Stacking Chairs, Rounded Back	731.94	3	0	219.582

Output: 
{
    "Claire Gute": {
        "orders": [
            {
                "order_id": "CA-2016-152156",
                "order_date": "2016-11-08T00:00:00.000Z",
                "line_items": [
                    {
                        "product_url": "https://www.foo.com/Furniture/Bookcases/FUR-BO-10001798",
                        "revenue": 261.96
                    },
                    {
                        "product_url": "https://www.foo.com/Furniture/Chairs/FUR-CH-10000454",
                        "revenue": 731.94
                    }
                ]
            }
        ]
    }
}