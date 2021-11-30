import openpyxl
import pprint

wb = openpyxl.load_workbook('covid.xlsx')
# print()
sheet = wb['Sheet1']
# print(sheet['C1'].value)
j=1
string = sheet[f'A{j}'].value
print(string)
# print(int(-1))

with open('covid.txt', 'a+',encoding='UTF-8') as f:
    f.write('[\n')
for i in range(1,64):
    city = sheet[f'A{i}'].value
    today = sheet[f'B{i}'].value
    total = sheet[f'C{i}'].value
    with open('covid.txt', 'a+',encoding='UTF-8') as f:
        f.write('{\n')
        f.write(f"city: '{city}',\n")
        f.write(f"today: {int(today)},\n")
        f.write(f"total: {int(total)}\n")
        if(i<63):
            f.write('},\n')
        else:
            f.write('}\n')
with open('covid.txt', 'a+',encoding='UTF-8') as f:
    f.write(']\n')    



    