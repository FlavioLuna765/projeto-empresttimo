casa = float(input('Valor da casa: R$ '))
salario = float(input('Salario do comprador: R$'))
anos = int(input('Quantos anos de financiamento? '))
prestação = casa / (anos * 12)
mínimo = salario * 30 / 100
print('Para paga uma casa de R${:.2f} em {:.2f} anos'.format(casa, anos), end='')
print(' A prestação será de R${:.2f}'.format(prestação))
if prestação <= mínimo:
    print('Empréstimo Autorizado!')
else:
    print('Empréstimo Negado!')