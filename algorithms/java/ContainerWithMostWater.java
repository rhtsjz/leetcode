import java.util.Arrays;

public class ContainerWithMostWater {
    private int maxAreaBruteWay(int[] height) {
        int maxArea = 0;
        for (int right = 1; right < height.length; right++) {
            for (int left = 0; left < right; left++) {
                int tmpArea = Math.min(height[right], height[left]) * (right - left);
                if (tmpArea > maxArea) {
                    maxArea = tmpArea;
                    System.out.printf("maxAreaBruteWay left=%d, right=%d, height[left]=%d, height[right]=%d\n", left, right, height[left], height[right]);
                } else {
                    System.out.println("maxAreaBruteWay skip");
                }
            }
        }
        return maxArea;
    }

    private int maxAreaSmartWay(int[] height) {
        int maxArea = 0, left = 0, right = height.length - 1;
        while (left < right) {
            maxArea = Math.max(maxArea, Math.min(height[right], height[left]) * (right - left));
            if (height[left] < height[right]) {
                left++;
            } else {
                right--;
            }
        }
        return maxArea;
    }


    public static void main(String[] args) {
        ContainerWithMostWater c = new ContainerWithMostWater();
        int[] height = new int[10];
        for (int i = 0; i < height.length; i++) {
//            height[i] = i;
            height[i] = height.length - i;
        }
        System.out.println(Arrays.toString(height));
        int maxAreaBruteWay = c.maxAreaBruteWay(height);
        System.out.printf("maxAreaBruteWay=%d\n", maxAreaBruteWay);
        int maxAreaSmartWay = c.maxAreaSmartWay(height);
        System.out.printf("maxAreaSmartWay=%d\n", maxAreaSmartWay);
    }
}