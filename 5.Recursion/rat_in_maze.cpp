// link = https://practice.geeksforgeeks.org/problems/rat-in-a-maze-problem/1

class Solution{
    private:
    
    bool isSafe(int x, int y, vector<vector<int>> visited, vector<vector<int>> m, int n) {
        if(x>=0 && x<n && y>=0 && y<n && visited[x][y] == 0 && m[x][y] == 1) {
            return true;
        }
        return false;
    }
    
    void solve( vector<string>& ans, vector<vector<int>> m, int x, int y, int n, vector<vector<int>> visited, string path) {
        // base case
        if(x == n-1 && y == n-1) {
            ans.push_back(path);
            return;
        }
        
        visited[x][y] = 1;
        
        // down
        int newX = x+1;
        int newY = y;
        if(isSafe(newX, newY, visited, m, n)) {
            path.push_back('D');
            solve(ans, m, newX, newY, n, visited, path);
            path.pop_back();
        }
        
        // up
        newX = x-1;
        newY = y;
        if(isSafe(newX, newY, visited, m, n)) {
            path.push_back('U');
            solve(ans, m, newX, newY, n, visited, path);
            path.pop_back();
        }
        
        // right
        newX = x;
        newY = y+1;
        if(isSafe(newX, newY, visited, m, n)) {
            path.push_back('R');
            solve(ans, m, newX, newY, n, visited, path);
            path.pop_back();
        }
        
        // left
        newX = x;
        newY = y-1;
        if(isSafe(newX, newY, visited, m, n)) {
            path.push_back('L');
            solve(ans, m, newX, newY, n, visited, path);
            path.pop_back();
        }
        
        visited[x][y] = 0;
    }
    public:
    vector<string> findPath(vector<vector<int>> &m, int n) {
        // Your code goes here
        int srcX = 0;
        int srcY = 0;
        vector<string> ans;
        
        if(m[0][0] == 0) {
            return ans;
        }
        
        string path = "";
        vector<vector<int>> visited = m;
        
        for(int i=0; i<n; i++) {
            for(int j=0; j<n; j++) {
                visited[i][j] = 0;
            }
        }
        
        solve(ans, m, srcX, srcY, n, visited, path);
        sort(ans.begin(), ans.end());
        return ans;
    }
};