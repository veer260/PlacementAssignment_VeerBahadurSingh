#include<bits/stdc++.h>
#include<vector>
using namespace std;


vector<int> twoSum(vector<int>& nums, int target) 
{
        // int start = 0;
        // int end = nums.size()-1;
        vector<int> ans;

        for(int i = 0; i< nums.size()-1; i++) {
            for(int j = i+1; j < nums.size(); j++) {
                if(nums[i] + nums[j] == target) {
                    ans.push_back(i);
                    ans.push_back(j);
                }
            }
        }

        return ans;
        
}

int main() {
    
}