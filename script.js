$(document).ready(function () {
	$('#calculate-btn').click(function(event) {
        event.preventDefault();
        console.log('ran')
		// calculate current income
		var week_revenue = $('#sr_serviceWeekly').val(); // weekly service revenue
		week_revenue = week_revenue.replace('$', '');
		week_revenue = week_revenue.replace(',', '');
		var earn_revenue = 0;
		earn_revenue = $('#sr_serviceRevenue').val(); // service revenue percentage
		earn_revenue = earn_revenue.replace(/%/g, '');
		var product_revenue = $('#sr_productSales').val(); // product sales amount
		product_revenue = product_revenue.replace('$', '');
		product_revenue = product_revenue.replace(',', '');
		var salon_week_rent = $('#sr_weeklyRent').val(); // SR weekly rent
		salon_week_rent = salon_week_rent.replace('$', '');
		salon_week_rent = salon_week_rent.replace(',', '');
		var product_earn_revenue = 0; 
		product_earn_revenue = $('#sr_productsEarn').val(); // product percentage
		product_earn_revenue = product_earn_revenue.replace(/%/g, '');


		if (product_revenue == '') {
			product_revenue = 0;
		}
		if (product_earn_revenue == '') {
			product_earn_revenue = 0;
		}
		if (earn_revenue == '') {
			earn_revenue = 0;
		}
		if (salon_week_rent == '') {
			salon_week_rent = 0;
		}

		//CURRENT PROFIT
		var current_service_profit = parseFloat(week_revenue) * parseFloat(earn_revenue) / 100; 
		var owner_retains = parseFloat(week_revenue) - parseFloat(current_service_profit);
		var current_product_profit = parseFloat(product_revenue) * parseFloat(product_earn_revenue) / 100; 
		var weekly_income = (parseFloat(current_service_profit) + parseFloat(current_product_profit)); 
		var monthly_income = parseFloat(weekly_income) * 4.33; 
		var annual_income = parseFloat(monthly_income) * 12; 

		$('#sr_serviceWeekly').val(accounting.formatMoney(week_revenue, "$", 0, ",", ".", "%s%v"));
		$('#sr_productSales').val(accounting.formatMoney(product_revenue, "$", 0, ",", ".", "%s%v"));
		$('#sr_weeklyRent').val(accounting.formatMoney(salon_week_rent, "$", 0, ",", ".", "%s%v"));

		$('#sr_serviceRevenue').val(earn_revenue + '%');
		$('#sr_productsEarn').val(product_earn_revenue + '%');

		$('#current_TotalServiceRevenue').html(accounting.formatMoney(week_revenue, "$", 0, ",", ".", "%s%v"));
		$('#current_OwnerRetains').html(accounting.formatMoney(owner_retains, "$", 0, ",", ".", "%s%v"));
		$('#current_ServiceProfit').html(accounting.formatMoney(current_service_profit, "$", 0, ",", ".", "%s%v"));
		$('#current_ProductSales').html(accounting.formatMoney(product_revenue, "$", 0, ",", ".", "%s%v"));
		$('#current_ProductProfits').html(accounting.formatMoney(current_product_profit, "$", 0, ",", ".", "%s%v"));
		$('#current_WeeklyIncome').html(accounting.formatMoney(weekly_income, "$", 0, ",", ".", "%s%v"));
		$('#current_MonthlyIncome').html(accounting.formatMoney(monthly_income, "$", 0, ",", ".", "%s%v"));
		$('#current_AnnualIncome').html(accounting.formatMoney(annual_income, "$", 0, ",", ".", "%s%v"));

		//NEW PROFIT
		var new_business_expenses = parseFloat(week_revenue) * .08;
		var new_service_profit = parseFloat(week_revenue) - parseFloat(salon_week_rent) - new_business_expenses;
		var new_product_profit = parseFloat(product_revenue) / 2;
		var misc_profit = parseFloat(week_revenue);
		var new_weekly_income = parseFloat(new_service_profit) + parseFloat(new_product_profit);
		var new_monthly_income = parseFloat(new_weekly_income) * 4.33;
		var new_annual_income = parseFloat(new_monthly_income) * 12;

		var increased_week_income = parseFloat(new_weekly_income) - parseFloat(weekly_income);
		var increased_percentage = parseFloat(increased_week_income) / (parseFloat(weekly_income) / 100);

		var increased_annual_income = parseFloat(new_annual_income) - parseFloat(annual_income);
		var increased_annual_percentage = parseFloat(increased_annual_income) / (parseFloat(annual_income) / 100);

		$('#new_WeeklyRent').html(accounting.formatMoney(salon_week_rent, "$", 0, ",", ".", "%s%v"));
		$('#new_TotalServiceRevenue').html(accounting.formatMoney(week_revenue, "$", 0, ",", ".", "%s%v"));
		$('#new_ServiceProfit').html(accounting.formatMoney(new_service_profit, "$", 0, ",", ".", "%s%v"));
		$('#new_BusinessExpenses').html(accounting.formatMoney(new_business_expenses, "$", 0, ",", ".", "%s%v"));
		$('#new_ProductSales').html(accounting.formatMoney(product_revenue, "$", 0, ",", ".", "%s%v"));
		$('#new_ProductProfits').html(accounting.formatMoney(new_product_profit, "$", 0, ",", ".", "%s%v"));
		$('#new_ExtrasMisc').html(accounting.formatMoney(misc_profit, "$", 0, ",", ".", "%s%v"));
		$('#new_WeeklyIncome').html(accounting.formatMoney(new_weekly_income, "$", 0, ",", ".", "%s%v"));
		$('#new_MonthlyIncome').html(accounting.formatMoney(new_monthly_income, "$", 0, ",", ".", "%s%v"));
		$('#new_AnnualIncome').html(accounting.formatMoney(new_annual_income, "$", 0, ",", ".", "%s%v"));

		//FINAL AMOUNTS
		//Weekly Increase
		//$('.final_amount').html(accounting.formatMoney(increased_week_income));
		//$('.final_percentage').html(parseInt(increased_percentage));

		//Annual Increase
		$('.final_amount').html(accounting.formatMoney(increased_annual_income));
		$('.final_percentage').html(parseInt(increased_annual_percentage));
		return false;
	});
    
});