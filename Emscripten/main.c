#include "stdio.h"

int array1[] = {
        10,20,30,40,
    };
    int a = 1;
    int array2[] = {
        50,60,70,80,
    };
    int b = 2;


int main(){
    for (int i = 0; i < 20; i++){
        printf("%d\n",array1[i]);
    }
    printf("%d\n",a);
    
    for (int i = 0; i < 20; i++){
        printf("%d\n",array2[i]);
    }
    printf("%d\n",b);
}