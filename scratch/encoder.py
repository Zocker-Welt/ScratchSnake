chars = [None,
         None,
         None,
         None,
         None,
         None,
         None,
         None,
         None,
         'a', 'A',
         'b', 'B',
         'c', 'C',
         'd', 'D',
         'e', 'E',
         'f', 'F',
         'g', 'G',
         'h', 'H',
         'i', 'I',
         'j', 'J',
         'k', 'K',
         'l', 'L',
         'm', 'M',
         'n', 'N',
         'o', 'O',
         'p', 'P',
         'q', 'Q',
         'r', 'R',
         's', 'S',
         't', 'T',
         'u', 'U',
         'v', 'V',
         'w', 'W',
         'x', 'X',
         'y', 'Y',
         'z', 'Z',
         ' ',
         '!',
         '"',
         '#',
         '&',
         "'",
         '(',
         ')',
         '*',
         '+',
         ',',
         '-',
         '.',
         '/',
         '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
         ':',
         ';',
         '<',
         '=',
         '>',
         '?',
         '[',
         chr(92), # \
         ']',
         '_',
         '{',
         '|',
         '}',
         '@']
def encode(val):
    output = ""
    for i in val:
        output += str(chars.index(i) + 1)
    return(output)

def decode(val):
    output = ""
    for i in range(0, len(val), 2):
        output += chars[int(val[i] + val[i+1]) - 1]
    return output