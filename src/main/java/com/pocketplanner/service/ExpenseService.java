package com.pocketplanner.service;

import com.pocketplanner.entity.Expense;
import com.pocketplanner.repository.ExpenseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class ExpenseService {

    @Autowired
    private ExpenseRepository expenseRepository;

    public Expense addExpense(Expense expense) {
        return expenseRepository.save(expense);
    }

    public List<Expense> getAllExpenses() {
        return expenseRepository.findAll();
    }

    public Expense updateExpense(Long id, Expense updatedExpense) {

        Expense expense = expenseRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Expense not found"));

        expense.setTitle(updatedExpense.getTitle());
        expense.setAmount(updatedExpense.getAmount());
        expense.setCategory(updatedExpense.getCategory());

        return expenseRepository.save(expense);
    }

    public void deleteExpense(Long id) {
        expenseRepository.deleteById(id);
    }

    public Map<String, Double> getCategorySummary() {

        Map<String, Double> summary = new HashMap<>();

        for (Expense expense : expenseRepository.findAll()) {

            summary.put(
                    expense.getCategory(),
                    summary.getOrDefault(expense.getCategory(), 0.0)
                            + expense.getAmount()
            );
        }

        return summary;
    }
    public Double getTotalExpenses() {
    return expenseRepository.getTotalExpenses();
}
}