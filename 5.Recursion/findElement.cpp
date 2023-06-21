#include <iostream>
using namespace std;

bool linearSearch (int *arr, int size, int key) {

  if (size == 0) {
    return false;
  }

  if(arr[0] == key) {
    return true;
  } else {
    bool remainingPart = linearSearch(arr+1, size-1, key);
    return remainingPart;
  }

}

int main() {
  int arr[6] = {1,2,3,10,7,8};
  int size = 6;
  int key = 7;
  bool result = linearSearch(arr,size,key);

  if (result)
    cout << "Element is present in the array" << endl << endl;
  else {
    cout << "Element is not present in the array" << endl << endl;
  }
}