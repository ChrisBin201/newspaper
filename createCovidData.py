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

# with open('gold.txt', 'a+',encoding='UTF-8') as f:
#     f.write('[\n')
# for i in range(1,50):
#     type = sheet[f'A{i}'].value
#     name = sheet[f'B{i}'].value
#     buy = str(sheet[f'C{i}'].value).split()[0]
#     buy = "".join(buy.split(","))
#     buy = "".join(buy.split("."))
#     sell = str(sheet[f'D{i}'].value).split()[0]
#     sell = "".join(sell.split(","))
#     sell = "".join(sell.split("."))
#     changeBuy = sheet[f'E{i}'].value
#     changeSell = sheet[f'F{i}'].value

#     with open('gold.txt', 'a+',encoding='UTF-8') as f:
#         f.write('{\n')
#         f.write(f"type: '{type}',\n")
#         f.write(f"name: '{name}',\n")
#         f.write(f"buy: {int(buy)},\n")
#         f.write(f"sell: {int(sell)},\n")
#         f.write(f"changeBuy: {changeBuy},\n")
#         f.write(f"changeSell: {changeSell}\n")
#         if(i<49):
#             f.write('},\n')
#         else:
#             f.write('}\n')
# with open('gold.txt', 'a+',encoding='UTF-8') as f:
#     f.write(']\n')    



    