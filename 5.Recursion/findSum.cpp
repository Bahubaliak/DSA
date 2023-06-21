#include <iostream>
using namespace std;

int getSum (int *arr, int size) {

  if (size == 0) {
    return 0;
  }
  if (size == 1) {
    arr[0];
  }
  int remain = getSum(arr+1, size-1);
  int sum = arr[0] + remain;

  return sum;
}

int main() {
  int arr[] = {1,2,3};
  int size = 3;
  int result = getSum(arr,size);

  cout << result << endl;
}