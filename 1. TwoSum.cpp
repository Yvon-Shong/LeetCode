class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        unorder_map<int,int> map;
        vector<int> index;
        for (int i = 0; i< nums.size();i++)
        {
            if (map.find(nums[i])==map.end())
            {
                map[target-nums[i]]=i;
            }
            else
            {
                result.push_back(map[nums[i]+1]);
                result.push_back(map[i+1]);
                break;
            }
        } 
    }
};