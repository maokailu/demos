/**Java基础复习 */
package basis;
public class Basis {
	// 常用基本数据类型
	char c;
	int i;
	long l;
	boolean bool;
	// 浮点数常量是double型的，除非用字母f明确说明它是float型的
	double d;
	float f;
	// 复合数据类型 class、数组、interface
	int intArray[];
	String s;
	// 修饰符
	// 限定访问权限的修饰符：最佳实践是属性私有，方法共有（可在其他类里用basis对象操作属性y）
	private int y;
	public void setY(int y){
		this.y = y;
	}
	public int getY(){
		return y;
	}
	// 存储方式修饰符static: 静态成员与类对应，它可被类的所有对象共享
	private static int counter = 0; private int serialNumber;
	public Basis(int[] intArray, String s){
		counter++;
		serialNumber = counter;
		this.intArray = intArray;
		this.s = s;
	}
	public static int x = 0;// 类中定义的公有静态变量相当于全局变量
	
	public static void main(String args[]){
		int intArray[] = {1,2};
		Basis basis1 = new Basis(intArray, "m");
		basis1.i = 111;
		Basis basis2 = new Basis(intArray, "n");
		StringBuffer sb = new StringBuffer();
		sb.append("a");
		sb.append("b"); 
		
		System.out.println(sb); 
		System.out.println(basis1.serialNumber +", "+ basis2.serialNumber);
		
	}
}
class OtherClass {
	int x;
	public int getX(){
		x = Basis.x; // 访问public static修饰的全局变量
		int intArray[] = {1,2};
		Basis basis = new Basis(intArray, "n");
		basis.setY(6);
		return basis.getY();
	}
}

