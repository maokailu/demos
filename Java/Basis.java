/**Java������ϰ */
package basis;
public class Basis {
	// ���û�����������
	char c;
	int i;
	long l;
	boolean bool;
	// ������������double�͵ģ���������ĸf��ȷ˵������float�͵�
	double d;
	float f;
	// ������������ class�����顢interface
	int intArray[];
	String s;
	// ���η�
	// �޶�����Ȩ�޵����η������ʵ��������˽�У��������У���������������basis�����������y��
	private int y;
	public void setY(int y){
		this.y = y;
	}
	public int getY(){
		return y;
	}
	// �洢��ʽ���η�static: ��̬��Ա�����Ӧ�����ɱ�������ж�����
	private static int counter = 0; private int serialNumber;
	public Basis(int[] intArray, String s){
		counter++;
		serialNumber = counter;
		this.intArray = intArray;
		this.s = s;
	}
	public static int x = 0;// ���ж���Ĺ��о�̬�����൱��ȫ�ֱ���
	
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
		x = Basis.x; // ����public static���ε�ȫ�ֱ���
		int intArray[] = {1,2};
		Basis basis = new Basis(intArray, "n");
		basis.setY(6);
		return basis.getY();
	}
}

