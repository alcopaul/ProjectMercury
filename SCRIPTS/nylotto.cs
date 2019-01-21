using System;

public class NYLottery
{
 public static void Main()
   {
      int[] bytes1 = new int[12];
      Random rnd1 = new Random(((DateTime.Now.Month + DateTime.Now.Day) * (DateTime.Now.Year)));
      for (int i = 0; i < bytes1.Length; i++)
      { 
          bytes1[i] = rnd1.Next(60);
      }
      Console.WriteLine("              ");
      Console.WriteLine("    NY Lottery");
      Console.WriteLine("              ");
      for (int ctr = bytes1.GetLowerBound(0); 
           ctr <= bytes1.GetUpperBound(0); 
           ctr++) { 
         Console.Write("{0, 5}", bytes1[ctr]);
         if ((ctr + 1) % 6 == 0) Console.WriteLine();
      }
      Console.ReadKey();  
   }
}