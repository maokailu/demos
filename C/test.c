# include <stdio.h>
# define LENGTH1 10
# define WIDTH1 5
int main()
{
	// 定义变量与常量
	int a, b, c;
	float f;
	a = 10, b = 20;
	c = a + b;
	f = 70.0 / 3.0;
	int area1;
	area1 = LENGTH1 * WIDTH1;
	const int  LENGTH2 = 10;
	const int  WIDTH2 = 5;
	int area2;
	area2 = LENGTH2 * WIDTH2;
	printf("value of c:%d\n", c);
	printf("value of f : %f \n", f);
	printf("value of area1 : %d", area1);
	printf("value of area2 : %d", area2);

	// 我的第一个C程序
	printf("%s\n", "hello world");

	// 输出指定类型的存储大小
	printf("int 存储大小 : %lu \n", sizeof(int));

	// 指针
	int var = 20;
	int *ip;
	ip = &var;
	printf("Address of var variable: %x\n", &var);
	/* 在指针变量中存储的地址 */
	printf("Address stored in ip variable: %x\n", ip);
	/* 使用指针访问值 */
	printf("Value of *ip variable: %d\n", *ip);
	return 0;
}