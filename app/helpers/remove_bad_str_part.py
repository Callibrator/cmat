#This function will remove a bad string part from a bigger tect


def remove_bad_str_part(text,str1,str2):
    while text.find(str1) > -1 and text.find(str2) > -1:
        text = text[:text.find(str1)] + text[text.find(str2) + len(str2):]

    return text